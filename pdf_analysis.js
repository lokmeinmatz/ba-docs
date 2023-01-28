import pdfjs from 'pdfjs-dist'
import { readFileSync } from 'node:fs'
import assert from 'node:assert';

async function main() {
  const pdfBuf = readFileSync('./ba-text/thesis_main.pdf');
  assert(pdfBuf)
  const pdf = await pdfjs.getDocument(pdfBuf).promise;
  const outline = await pdf.getOutline()
  const bibEntry = outline.find(e => e.title === 'Bibliography')
  const bibDest = await pdf.getDestination(bibEntry.dest);
  
  const bibPage = await pdf.getPageIndex(bibDest[0]);
  console.log(`Reading until page idx ${bibPage}`)
  
  // get all chapters and where they start
  /**
   * @type {Array<typeof bibEntry & { startPage: number, wordCount: number }>}
   */
  const chapters = [];

  for (const chapter of outline) {
    const dst = await pdf.getDestination(chapter.dest);
    const pageIdx = await pdf.getPageIndex(dst[0]);
    if (pageIdx > bibPage || chapter.title === 'Bibliography') continue;
    chapters.push({ ...chapter, startPage: pageIdx + 1, wordCount: 0 });
  }

  const undefinedChapter = { startPage: 0, wordCount: 0 };

  for (let pageIdx = 1; pageIdx <= bibPage; pageIdx++) {
    const page = await pdf.getPage(pageIdx);
    const chapter = chapters.find((c, idx, all) => c.startPage <= pageIdx && (!all[idx+1] || all[idx+1].startPage > pageIdx)) ?? undefinedChapter;
    console.log(`Page ${pageIdx} for chapter ${chapter?.title}`);
    const textContent = await page.getTextContent()
    for (const textitem of textContent.items) {
      if (!textitem.str) continue;
      const wordCount = textitem.str.split(' ').filter(e => !!e).length
      chapter.wordCount += wordCount
    }
  }

  for (let i = 0; i < chapters.length; i++) {
    const c = chapters[i];
    const nextC = chapters[i+1];
    console.log(`Chapter ${c.title} (p. ${c.startPage} - ${nextC?.startPage ?? 'end'}): ${c.wordCount} words`);
  }
  console.log(`Undefined chapter`, undefinedChapter);
  console.log('total words:', undefinedChapter.wordCount + chapters.filter(c => !['Abstract', 'Zusammenfassung', 'Table of Contents'].includes(c.title)).reduce((acc, c) => acc + c.wordCount, 0))
}

main()
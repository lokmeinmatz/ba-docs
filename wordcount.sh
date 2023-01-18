TARGET="./ba-text/thesis_main.pdf"
END_PAGE=${1:-100}
echo "Counting words in $TARGET until page $END_PAGE"
java -jar pdfbox-app-2.0.27.jar PDFSplit -endPage $END_PAGE -outputPrefix splitted $TARGET
java -jar pdfbox-app-2.0.27.jar ExtractText -console splitted-1.pdf | wc -w
# rm splitted-1.pdf
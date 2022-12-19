% ---------------------------------------------------
% ---------------------------------------------------
% ----- README for thesis template
% ---------------------------------------------------
% ---------------------------------------------------
%
%  Created by Claudia Müller-Birn on 2012-08-17.
%  Freie Universität Berlin, Institute of Computer Science, Human Centered Computing. 

== Please note: 
== The overall structure of this template is inspired by the KIT template.
== It is available at http://sdqweb.ipd.kit.edu/wiki/Dokumentvorlagen#Ausarbeitungen)
== I simplified the template to meet the needs of less experienced LaTeX users. 
== The README file is still work-in-progress

--------------------------------------------------
----- How to use the template 
--------------------------------------------------

* In all documents, I highlighted required user specific adaptations by <???>. Please change or select the letters between the marks and delete them afterwards.   
* All comments in the document are indicated by an % (dollar) sign. 

--------------------------------------------------
----- Structure of template 
--------------------------------------------------

├─ abstract_de.tex
├─ abstract_en.tex
├─ appendix.tex
├─ chapters.tex
├─ conclusion.tex
├─ declaration.tex
├─ introduction.tex
├─ pics
│   └─ FU_logo.pdf
├─ references.bib
├─ thesis_main.tex
└─ title.tex

--------------------------------------------------
----- Packages used in this template 
--------------------------------------------------

The documentation for almost all packages used are available at http://www.ctan.org (Comprehensive TeX Archive Network).  

Alternative package origins by package:
* babel: http://parokia.kre.hu/lelkesz/latex/babel.pdf


--------------------------------------------------
----- Installing LaTeX 
--------------------------------------------------

* Excellent installation guide:  http://www.dante.de/help/documentation/miktex/ (German)
* Mac users please use: http://tug.org/mactex/

For using LateX you need a viewer, such as 
* Xpdf http://en.wikipedia.org/wiki/Xpdf 

and a text editor, such as 
* Linux: Vim Editor http://www.vim.org/
* Windows: TeXnicCenter http://www.texniccenter.org/
* OSX: TextMate http://macromates.com/


--------------------------------------------------
----- General help for LateX  
--------------------------------------------------

Some useful LaTeX help web pages
* http://www.siart.de/typografie/latextipps.xhtml 
* http://www.uni-graz.at/rlswww_latex-hauptdokument.pdf (German)


--------------------------------------------------
----- BibTeX Tips
--------------------------------------------------

* The bibliography  section allows you to easily integrate your references into your document. This is one of the advantages of using LaTeX. 
* There are various programs available for organizing your bibtex references. I personally recommend the open source software Jabref 
(http://jabref.sourceforge.net/download.php) for Windows or Bibdesk (http://bibdesk.sourceforge.net/) for mac. I have not used it but I heard that is is good: Mendeley Desktop (http://www.mendeley.com/download-mendeley-desktop/).






## Introduction

Here are a few things that you might want to consider including in your introduction:

    Background information: Provide some context for your work by outlining the relevant background information and discussing the factors that motivated you to undertake this research.

- developing new software with new features / added value inside a real company where changes are limited
- apply HCI to that scenario (brownfield development), find balance between new methods etc and sticking to exisiting flows
- exisiting user base and clearly definable personas that can be utilized for research
- in concrete case: improove workflow of users, make lives easier and work less error prone


    Problem statement: Clearly articulate the problem or challenge that your work is addressing. This could be a gap in the existing literature, a pressing need or issue in the field, or a problem that you have personally encountered.

    Research question(s): Formulate one or more research questions that your work will aim to answer. These questions should be focused and specific, and should help to guide your research and inform your analysis.

- see thesis question

    Objectives: Clearly state the objectives of your work and outline the specific goals that you hope to achieve through your research.

- determine user group(s)
- apply HCI methods bronfield development inside of company
- build UI Editor, scalable, fast and good UX


    Scope: Define the scope of your work, including any limitations or constraints that you will need to consider. This will help to provide context for your research and will help readers to understand the specific focus of your work.

- exisiting file system, file strucuture, schemata etc.
- exisitng processing flow (external APIs)
- limits to technology
- process (SCRUM)

    Significance: Explain why your work is important and how it will contribute to the existing body of knowledge in your field.

- most common approach in larger companies to only do one part new, all ecosystem restrictions still hold 
TARGET=${1:-"./ba-text/thesis_main.pdf"}
echo "Counting words in $TARGET"
java -jar pdfbox-app-2.0.27.jar ExtractText -console $TARGET | wc -w   
#!/bin/bash
sed '/^---/ d' PITCHME.md | sed '/^@/ d' | sed '/^:::/ d' | sed 's/{.*}//' > README.md

PATHEND=$(pwd | rev | cut -d'/' -f-2 | rev)

pandoc  -V theme=simple -t revealjs -s PITCHME.md -o PITCHME.html
pandoc -V fontfamily:ClearSans -V fontfamilyoptions:sfdefault README.md -o README.pdf
pandoc -V fontfamily:ClearSans -V fontfamilyoptions:sfdefault FAQ.md -o FAQ.pdf

git add .
git commit -m "Working on presentation $PATHEND"
git push -u origin main


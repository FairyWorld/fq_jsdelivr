@echo off
tree /f .|findstr /V "��" >doc_tree.md
git add .
git commit -m "commit via auto upload shell"
git push
pause
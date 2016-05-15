# create backups first without branch switching. Much safer. Trust me.
./scripts/backup_branches.sh

git checkout reusable-ui-components
git rebase --onto jump-start head~2 head
git branch -f reusable-ui-components

git checkout observables
git rebase --onto jump-start head~4 head
git branch -f observables

git checkout architecture
git rebase --onto jump-start head~2 head
git branch -f architecture

git checkout forms
git rebase --onto jump-start head~6 head
git branch -f forms

git checkout routing
git rebase --onto jump-start head~4 head
git branch -f routing

git checkout jump-start
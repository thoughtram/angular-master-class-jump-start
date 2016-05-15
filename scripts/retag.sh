tagIt () {
    git checkout jump-start
    gtag root.. jump-start-step-##i $1
    git checkout architecture
    gtag HEAD~4.. architecture-step-##ii $1
    git checkout observables
    gtag HEAD~3.. observables-step-##ii $1
    git checkout forms
    gtag HEAD~8.. forms-step-##ii $1
    git checkout routing
    gtag HEAD~4.. routing-step-##ii $1
    git checkout redux
    gtag HEAD~4.. redux-step-##ii $1

    #going back to jump-start as the default branch
    git checkout jump-start
}

echo -n "Wanna do a dry-run first (y/n)? "
read answer
if echo "$answer" | grep -iq "^y" ;then
    tagIt --dryrun
else
    tagIt
fi

let n=6;
let s:string ="";

for(let i=1; i<=n; i++){
    let stars= i;
    let spaces= n- stars;


    for(let j=1; j<=spaces;j++)
    s+= " ";


    for(let j=1; j<stars; j++)
    s+="*";

    s+="\n"
}

console.log(s);
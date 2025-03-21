const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log('entry point')
    const height = parseInt(document.querySelector('#height').value);
    // console.log(height)
    const weight =parseInt(document.querySelector('#weight').value);
    // console.log(weight)
    const res = document.querySelector('#result');
    
    if(height<0 || height==' ' || isNaN(height))
    {
        res.innerHTML = `please give a valid height is  ${height}`;
    } 
    else if(weight<0 || weight==' ' || isNaN(weight))
        {
             res.innerHTML = `please give a valid weight is ${weight}`;
        }
    else{
        const val = (weight*1000/(height*height)).toFixed(2);
         const form = document.querySelector('form');
// console.log(form);

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // console.log('entry point')
    const height = parseInt(document.querySelector('#height').value);
    // console.log(height)
    const weight =parseInt(document.querySelector('#weight').value);
    // console.log(weight)
    const res = document.querySelector('#result');
    
    if(height<0 || height==' ' || isNaN(height))
    {
        res.innerHTML = `please give a valid height is  ${height}`;
    } 
    else if(weight<0 || weight==' ' || isNaN(weight))
        {
             res.innerHTML = `please give a valid weight is ${weight}`;
        }
    else{
        const val = (weight*1000/(height*height)).toFixed(2);
        res.innerHTML = `<span style="font-weight: bold;">Your BMI: ${val}</span>`;
         
    }
})
         
    }
})
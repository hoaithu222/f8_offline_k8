function fibonacci(n){
    if(n == 0 || n == 1){
        return n;
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2);
    }
}

for(let i = 0; i < 10; i++){
    document.write(fibonacci(i) +" ");
}
function mean(list){
    // let listSum = 0
    // for (let i = 0; i < list.length; i++) {
    //     listSum = listSum + list[i];
    // };
    
    const listSum = list.reduce(
        function(acummValue = 0, newElement){
        return acummValue + newElement;
        }
    );

    const meanList = listSum / list.length;
    return meanList;
}

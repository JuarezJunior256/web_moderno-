function area(larg, alt) {
    const area = larg * alt;

    if (area > 20 ) {
        console.log(`valor acima do permitido: ${area}m2`);
    }else {
        return area;
    }
}
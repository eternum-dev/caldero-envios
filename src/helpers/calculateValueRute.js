



export const calculateValueRute = (distance) => {
    let valueRute = 0;
    
    (distance <= 1500) ?
        valueRute = 1500
        : distance <= 2500 ?
            valueRute = 2000
            : distance <= 3500 ? valueRute = 2500
                : valueRute = 3000

    return valueRute;
}
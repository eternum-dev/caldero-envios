

const valueDelivery = {
    min: 2000,
    mid: 2500,
    max: 3000
}
const valueDistance = {
    min: 1500,
    mid: 2500,
    max: 3050
}

export const calculateValueRute = (distance) => {
    let valueRute = 0;
    
    
    (distance <= valueDistance.min) ?
        valueRute = valueDelivery.min
        : distance <= valueDistance.mid ?
            valueRute = valueDelivery.mid
            : distance <= valueDistance.max ? valueRute = 2500
                : valueRute = valueDelivery.mix


    return valueRute;
}
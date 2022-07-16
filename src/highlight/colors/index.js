import React from "react";

export default function highlightColor(color) {

    switch (color) {
        case 'Gelb':  
            return 'yellow'
        case 'Grün':
            return 'lightgreen'
        case 'Orange':
            return 'orange'
        case 'Rot':
            return '#ff0000'
        case 'Lila':
            return '#d06ecb'
        case 'Blau':
            return '#82e5ff'
        case 'Löschen':
            return null
        case null:
            return null

        default:
        alert('Farbfehler')
    }
}
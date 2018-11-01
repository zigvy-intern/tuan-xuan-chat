import {Mongo} from 'meteor/mongo';

export function randomColor()
{
    let color = ["pink", "red", "orange", "blue", "yellow", "green", "cyan"]
    let i= Math.floor(Math.random() * 7);
    return color[i]
}
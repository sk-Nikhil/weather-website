const request = require('request')


const forecast = (latitude, longitude, callback)=>{
    const url = `http://api.weatherstack.com/current?access_key=deacf7086f56c8d3be53596ee74a1933&query=${latitude},${longitude}&units=m`

    request({ url : url, json : true}, (error, {body})=>{
        if(error) {
            callback("unable to connect", undefined)
        }
        else if(body.error) {
            callback("unable to find the location", undefined)
        }
        else{
            const temp = body.current.temperature
            const precip = body.current.precip
            const data = `${body.current.weather_descriptions[0]}. It is currently ${temp} degrees out. There is ${precip}% chance of rain`
            callback(undefined, data)
        }
    })
}



module.exports = forecast
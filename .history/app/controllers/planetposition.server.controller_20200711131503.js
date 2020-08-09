'use strict';
var swisseph = require('swisseph');
var planets = require('../constants');
exports.getAllPlanetPositions = function (req, res) {
    req.date = new Date();
    req.hours = 12;
    req.minutes = 37;
    swisseph.swe_set_ephe_path(__dirname + '/../ephe');
    var date = {
        year: 1998,
        month: 1,
        day: 29,
        hour: (Number(req.hours) + ((Number(req.minutes) / 60)))
    };
    swisseph.swe_julday(date.year, date.month, date.day, date.hour, swisseph.SEFLG_SPEED, function (julday_ut) {
        console.log('Julian UT day for date:', julday_ut);
        var positions = [];
        planets.planetNames.forEach(function (eachPlanet) {
            swisseph.swe_calc_ut(julday_ut, eachPlanet.flag, swisseph.SEFLG_SPEED, function (planetPosition) {
                planetPosition['name'] = eachPlanet.planetName;
                positions.push(planetPosition);
                console.log(positions);
            });
        });
    });
};
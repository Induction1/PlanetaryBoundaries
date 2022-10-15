function getData() {
    let stop2Color = "#A0A0A0";

    biosphereCatTitle = "Biosphere Boundaries";
    let data = [

        {
            "name": biosphereCatTitle,
            "outerRadiusExtractors": {
                "primaty": sub_cat => sub_cat.value.green
            },
            "sub_cat": [{
                    "name": "Stratospheric Ozone Depletion",
                    "value": {
                        "green": 0,
                        "yelloGreen": 0,
                        "blue": 0,
                        "gray": 0.55,
                    },
                    "type": "none",
                    "known": true,
                },
                {
                    "name": "Ocean Acidification",

                    "value": {
                        "green": 0.85,
                        "yelloGreen": 0.5,
                        "blue": 0,
                        "gray": 0.15,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Freshwater Use",

                    "value": {
                        "green": 0,
                        "yelloGreen": 1,
                        "blue": 0,
                        "gray": 0.5,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Biophere Integrity: Ocean",

                    "value": {
                        "green": 1.3,
                        "yelloGreen": 0,
                        "blue": 0,
                        "gray": 0,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Biophere Integrity: Land",

                    "value": {
                        "green": 1.5,
                        "yelloGreen": 0,
                        "blue": 0,
                        "gray": 0,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Land-system Change",

                    "value": {
                        "green": 1.55,
                        "yelloGreen": 0,
                        "blue": 1.35,
                        "gray": 1.22,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Climate Change",

                    "value": {
                        "green": 2,
                        "yelloGreen": 1.45,
                        "blue": 0,
                        "gray": 0.67,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Biochemical Flows",

                    "value": {
                        "green": 2.25,
                        "yelloGreen": 1.92,
                        "blue": 0,
                        "gray": 0.27,
                    },
                    "type": "dynamic",
                    "known": true,
                },
                {
                    "name": "Biophere Integrity: Freshwater",

                    "value": {
                        "green": 4.18,
                        "yelloGreen": 0,
                        "blue": 0,
                        "gray": 0,
                    },
                    "type": "dynamic",
                    "known": true,
                },

            ],
            "portion": 15,
            "clazz": "planet_boundaries",
            "gradientsId": "planet_boundaries-gradients",
            "stop1Color": "#66FF00",
            "stop2Color": "#125700",
        },
        {
            "name": "Energy Stocks",
            "outerRadiusExtractors": {
                "primaty": sub_cat => sub_cat.value
            },
            "sub_cat": [{
                    "name": "Coal",
                    "value": 1.336,
                    "type": "none",
                    "raw_value": 133,
                },
                {
                    "name": "Uranium",
                    "value": 2,
                    "type": "none",
                    "raw_value": 100,
                },
                {
                    "name": "Oil",
                    "value": 2.936,
                    "type": "none",
                    "raw_value": 56,
                },
                {
                    "name": "Gas",
                    "value": 2.936,
                    "type": "none",
                    "raw_value": 56,
                }
            ],
            "note": "scale of 180 years",
            "portion": 6,
            "clazz": "energies",
            "gradientsId": "energies-gradients",
            "stop1Color": "#3333FF",
            "stop2Color": "#090957",
        },
        {
            "name": "Critical Materials",
            "outerRadiusExtractors": {
                "primaty": sub_cat => sub_cat.value
            },
            "sub_cat": [{
                    "name": "Cr",
                    "value": 2.08,
                    "type": "none",
                },
                {
                    "name": "V",
                    "value": 2.16,
                    "type": "none",
                },
                {
                    "name": "Ge",
                    "value": 2.16,
                    "type": "none",
                },
                {
                    "name": "Te",
                    "value": 2.256,
                    "type": "none",
                },
                {
                    "name": "P",
                    "value": 2.408,
                    "type": "none",
                },
                {
                    "name": "Pb",
                    "value": 2.548,
                    "type": "none",
                },
                {
                    "name": "Mn",
                    "value": 2.768,
                    "type": "none",
                },
                {
                    "name": "Li",
                    "value": 2.768,
                    "type": "none",
                },
                {
                    "name": "Stl",
                    "value": 3.032,
                    "type": "none",
                },
                {
                    "name": "Al",
                    "value": 3.032,
                    "type": "none",
                },
                {
                    "name": "Pt",
                    "value": 3.04,
                    "type": "none",
                },
                {
                    "name": "As",
                    "value": 3.192,
                    "type": "none",
                },
                {
                    "name": "Co",
                    "value": 3.216,
                    "type": "none",
                },
                {
                    "name": "Zn",
                    "value": 3.296,
                    "type": "none",
                },
                {
                    "name": "Re",
                    "value": 3.352,
                    "type": "none",
                },
                {
                    "name": "B",
                    "value": 3.392,
                    "type": "none",
                },
                {
                    "name": "Cu",
                    "value": 3.472,
                    "type": "none",
                },
                {
                    "name": "Mo",
                    "value": 3.552,
                    "type": "none",
                },
                {
                    "name": "In",
                    "value": 3.568,
                    "type": "none",
                },
                {
                    "name": "Ga",
                    "value": 3.632,
                    "type": "none",
                },
                {
                    "name": "Ta",
                    "value": 3.656,
                    "type": "none",
                },
                {
                    "name": "Nb",
                    "value": 3.784,
                    "type": "none",
                },
                {
                    "name": "Ni",
                    "value": 3.8,
                    "type": "none",
                },
                {
                    "name": "Zr",
                    "value": 3.96,
                    "type": "none",
                },
                {
                    "name": "Sn",
                    "value": 3.96,
                    "type": "none",
                },
                {
                    "name": "Sb",
                    "value": 4,
                    "type": "none",
                },
                {
                    "name": "Ag",
                    "value": 4.024,
                    "type": "none",
                },
                {
                    "name": "Au",
                    "value": 4.04,
                    "type": "none",
                },
                {
                    "name": "Se",
                    "value": 4.104,
                    "type": "none",
                },
                {
                    "name": "Cd",
                    "value": 4.18, //4.4064
                    "type": "none",
                },

            ],
            "portion": 15,
            "clazz": "metals",
            "gradientsId": "metals-gradients",
            "stop1Color": "#FF3333",
            "stop2Color": "#570909",
        }

    ]
    return data;
}

function doBackdrop(g, width) {
    g.append("circle")
        .attr("id", "backdrop-circle")
        .attr("r", width / 2);
}

function setSubCatAnglesAndRadius(data, rScale) {
    let total_portion = d3.sum(data.map(d => d.portion));
    let end_angle = 0;
    data.forEach(d => {
        d.start_angle = end_angle;
        d.end_angle = d.start_angle + 2 * Math.PI * d.portion / total_portion;
        end_angle = d.end_angle;
        d.major_line = rScale(4.5);

        let total_sub_cats = d.sub_cat.length;

        let sub_cat_angle = (d.end_angle - d.start_angle) / total_sub_cats;
        let sub_cat_end_angle = d.start_angle;
        d.sub_cat_angle = sub_cat_angle;
        if (biosphereCatTitle === d.name) {
            d.sub_cat.forEach(sc => {
                sc.start_angle = sub_cat_end_angle;
                sub_cat_end_angle += sub_cat_angle;
                sc.end_angle = sub_cat_end_angle;

                let startAngle = sc.start_angle;
                let endAngle = sc.end_angle
                if (startAngle > Math.PI / 2 && startAngle < 3 * Math.PI / 2 && endAngle > Math.PI / 2 && endAngle < 3 * Math.PI / 2) {
                    sc.bioUpsideDown = true;
                } else {
                    sc.bioUpsideDown = false;
                }


                sc.r_green = rScale(sc.value.green);
                sc.r_yelloGreen = rScale(sc.value.yelloGreen);
                sc.r_blue = rScale(sc.value.blue);
                sc.r_gray = rScale(sc.value.gray)
                sc.r = Math.max(sc.r_green, sc.r_yelloGreen, sc.r_blue, sc.r_gray);

                sc.minor_line = rScale(4.2);
            });
        } else {
            d.sub_cat.forEach(sc => {
                sc.start_angle = sub_cat_end_angle;
                sub_cat_end_angle += sub_cat_angle;
                sc.end_angle = sub_cat_end_angle;
                sc.r = rScale(sc.value);
                sc.minor_line = rScale(4.2);

                let startAngle = sc.start_angle;
                let endAngle = sc.end_angle
                if (startAngle > Math.PI / 2 && startAngle < 3 * Math.PI / 2 && endAngle > Math.PI / 2 && endAngle < 3 * Math.PI / 2) {
                    sc.nonBioUpsideDown = true;
                } else {
                    sc.nonBioUpsideDown = false;
                }
            });
        }

    });
}

function doMarkerCircles(g, n, r_inc) {
    for (let i = n; i > 0; i--) {
        let circle = g.append("circle")
            .classed("marker_circle", true)
            .attr("r", i * r_inc);

        if (i % 2 === 0) {
            circle.classed("major", true);
        } else {
            circle.classed("minor", true);
        }
    }
}

function doCatetorySectors(g, cat, outerRadiusExtractor, clazzExtractor) {
    let arc = d3.svg.arc()
        .startAngle(function(d, i) {
            return d.start_angle;
        })
        .endAngle(function(d, i) {
            return d.end_angle;
        })
        .innerRadius(0)
        .outerRadius(function(d, i) {
            return outerRadiusExtractor(d);
        });
    g.selectAll("sector")
        .data(cat.sub_cat)
        .enter()
        .append("path")
        .classed(clazzExtractor(cat), true)
        .attr("d", arc);
}

function doMinorLines(g, data) {
    let sub_cats = data.flatMap(d => d.sub_cat);
    g.selectAll("line.minor")
        .data(sub_cats)
        .enter()
        .append("line")
        .classed("gridlines_minor", true)
        .attr("y1", 0)
        .attr("y2", function(d) {
            return -d.minor_line;
        })
        .attr("transform", function(d, i) {
            return "rotate(" + 360 * d.start_angle / 2 / Math.PI + ")";
        });
}

function doMajorLines(g, data) {
    g.selectAll("line.major")
        .data(data)
        .enter()
        .append("line")
        .classed("gridlines_major", true)
        .attr("y1", 0)
        .attr("y2", function(d) {
            return -d.major_line;
        })
        .attr("transform", function(d, i) {
            return "rotate(" + 360 * d.start_angle / 2 / Math.PI + ")";
        });
}

function doDefs(svg, data, maxR) {
    let defs = svg.append("defs");

    for (let cat of data) {
        let gradients = defs.append("radialGradient")
            .attr("id", cat.gradientsId)
            .attr("gradientUnits", "userSpaceOnUse")
            .attr("cx", "0")
            .attr("cy", "0")
            .attr("r", maxR)
            .attr("spreadMethod", "pad");
        gradients.append("stop")
            .attr("offset", "0%")
            .attr("stop-color", cat.stop1Color);
        gradients.append("stop")
            .attr("offset", "100%")
            .attr("stop-color", cat.stop2Color);
    }
}

function doSectorText(g, data, innerR, outerR, prefix, wrappText) {
    let arc_cat_label = d3.svg.arc()
        .startAngle(function(d, i) {
            return d.start_angle;
        })
        .endAngle(function(d, i) {
            return d.end_angle;
        })
        .innerRadius(d => {
            if (d.bioUpsideDown) {
                return innerR - 12;
            } else if (d.nonBioUpsideDown) {
                return innerR + 8
            } else {
                return innerR;
            }
        })
        .outerRadius(d => {
            if (d.bioUpsideDown) {
                return outerR - 12;
            } else if (d.nonBioUpsideDown) {
                return outerR + 8
            } else {
                return outerR;
            }
        });
    let cat_text = g.selectAll("path." + prefix + "_label_arc")
        .data(data)
        .enter()
        .append("path")
        .classed(prefix + "-label-arc", true)
        .attr("id", function(d, i) {
            return prefix + "_label_" + i;
        })
        .attr("fill-opacity", "0%")
        .attr("d", arc_cat_label);
    cat_text.each(function(d, i) {
        let firstArcSeciton = /(^.+?)L/;
        // Grab everything up to the first Line statement
        let newArc = firstArcSeciton.exec(d3.select(this).attr("d"))[1];
        // Replace all commas so that IE can handle it
        newArc = newArc.replace(/,/g, " ");
        let startAngle = d.start_angle;
        let endAngle = d.end_angle;

        if (startAngle > Math.PI / 2 && startAngle < 3 * Math.PI / 2 && endAngle > Math.PI / 2 && endAngle < 3 * Math.PI / 2) {
            let startLoc = /M(.*?)A/;
            let middleLoc = /A(.*?)0 0 1/;
            let endLoc = /0 0 1 (.*?)$/;

            let newStart = endLoc.exec(newArc)[1];
            let newEnd = startLoc.exec(newArc)[1];
            let middleSec = middleLoc.exec(newArc)[1];
            newArc = "M" + newStart + "A" + middleSec + "0 0 0" + newEnd;
        }
        d3.select(this).attr("d", newArc);
    });

    let texts = g.selectAll("." + prefix + "-label-text")
        .data(data)
        .enter()
        .append("text")
        .attr("dy", function(d, i) {
            let startAngle = d.start_angle;
            let endAngle = d.end_angle;
            return (startAngle > Math.PI / 2 && startAngle < 3 * Math.PI / 2 && endAngle > Math.PI / 2 && endAngle < 3 * Math.PI / 2) ? 2 : 14;
        })
        .append("textPath")
        .classed(prefix + "-text", true)
        // .attr("startOffset", "50%")
        // .style("text-anchor", "middle")
        .attr("xlink:href", function(d, i) {
            return "#" + prefix + "_label_" + i;
        })
        .text(function(d) {
            return d.name;
        });
    if (true) {
        texts.call(wrapTextOnArc, g, outerR);
    }
}

function doCategoryRing(g, data, innerR, outerR) {
    let arc = d3.svg.arc()
        .startAngle(function(d, i) {
            return d.start_angle + Math.PI / 360;
        })
        .endAngle(function(d, i) {
            return d.end_angle - Math.PI / 360;
        })
        .cornerRadius((outerR - innerR) / 5)
        .innerRadius(innerR)
        .outerRadius(outerR);

    g.selectAll(".cat_ring")
        .data(data)
        .enter()
        .append("path")
        .classed("cat_ring", true)
        .attr("fill", "#A0A0A0")
        .attr("d", arc);
}

// https://bl.ocks.org/mbostock/7555321
function wrapTextOnArc(texts, g, radius) {
    let temporaryText = g.append("text")
        .classed("sub_cat-text", true)
        .classed("temporary-text", true);
    let getTextLength = function(str) {
        temporaryText.text(str);
        return temporaryText.node().getComputedTextLength();
    };
    texts.each(function(d) {
        let text = d3.select(this);
        let words = text.text().split(/[ \f\n\r\t\v]+/).reverse();
        let word;
        let line = [];
        let textLength;
        let lineHeight = 1.1; //ems
        let x = 0;
        let y = 0;
        let dy = 0;
        let tspan = text.text(null)
            .append("tspan")
            .attr("x", x)
            .attr("y", y)
            .attr("dy", dy + "em");
        let arcLength = ((d.end_angle - d.start_angle) / (2 * Math.PI)) * (2 * Math.PI * radius);
        let paddedArcLength = arcLength - 16;

        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            textLength = getTextLength(tspan.text());
            tspan.attr("x", (arcLength - textLength) / 2); // This is set to 0, it is because there is a startOffset of 50% in the parent textPath element. Not sure how it works!!!
            if (textLength > paddedArcLength && line.length > 1) {
                // remove last word
                line.pop();
                tspan.text(line.join(" "));
                textLength = getTextLength(tspan.text());
                tspan.attr("x", (arcLength - textLength) / 2);

                // start new line with last word
                line = [word];
                tspan = text.append("tspan").attr("dy", lineHeight + dy + "em").text(word);
                textLength = getTextLength(tspan.text());
                tspan.attr("x", (arcLength - textLength) / 2);
            }
        }

    });
    d3.selectAll("text.temporary-text").remove();
}


function doDrawArc(g, rScale, cat, r, width, clazz) {
    let arc = d3.svg.arc()
        .startAngle(cat.start_angle)
        .endAngle(cat.end_angle)
        .innerRadius(rScale(r - width / 2))
        .outerRadius(rScale(r + width / 2));
    g.append("path")
        .classed(clazz, true)
        .attr("d", arc);
}

function draw() {

    let r_inc = 60;
    let n = 4;
    let overshoot = r_inc / 2 + 6;
    let sub_cat_r = 16;
    let cat_r = 20;

    let maxR = n * r_inc + overshoot;
    let width = maxR * 2 + sub_cat_r * 2 + cat_r * 2;
    let height = width;
    let margin = 80;
    let data = getData();

    let svg = d3.select("#main-svg")
        .attr("width", width + 2 * margin)
        .attr("height", height + 2 * margin);
    let g = svg.append("g")
        .attr("top", margin)
        .attr("left", margin)
        .attr("id", "canvas")
        .attr("width", width)
        .attr("height", height)
        .attr("transform", "translate(" + (width / 2 + margin) + ", " + (height / 2 + margin) + ")");


    doDefs(svg, data, maxR);
    // doBackdrop(g, width);

    let rScale = d3.scale.linear()
        .domain([0, 4])
        .range([0, n * r_inc]);
    setSubCatAnglesAndRadius(data, rScale);
    console.log(data);

    for (let cat of data) {
        doCatetorySectors(g, cat, d => d.r, c => c.clazz);
    }
    biosphereCat = data[0]
        // doCatetorySectors(g, biosphereCat, d => d.r_yelloGreen, c => "boundaries-parallel-human");
        // doCatetorySectors(g, biosphereCat, d => d.r_blue, c => "boundaries-reactive-human");
        // doCatetorySectors(g, biosphereCat, d => d.r_gray, c => "boundaries-direct-human");

    doCategoryRing(g, data, maxR + sub_cat_r, maxR + sub_cat_r + cat_r * 1.5);
    doMarkerCircles(g, n, r_inc);
    doMinorLines(g, data);

    doDrawArc(g, rScale, biosphereCat, 1, 0.04, "boundary-value"); //TODO 

    doMajorLines(g, data);
    // doSectorText(g, data, maxR + sub_cat_r, maxR + sub_cat_r + cat_r, "category");
    doSectorText(g, data.flatMap(d => d.sub_cat), maxR, maxR, "sub_cat", true);

}
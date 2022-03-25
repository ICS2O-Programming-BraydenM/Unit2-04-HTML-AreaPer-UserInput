// Copyright (c) 2022 Ms Raffin All rights reserved
//
// Created by: Brayden MacMillan
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of rectangle.
 */
function calculate () {
  // input
  const base = parseInt(document.getElementById('base-of-rectangle').value)
  const height = parseInt(document.getElementById('height-of-rectangle').value)

  // process
  const area = base * height
  const perimeter = 2 * (base + length)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
  document.getElementById('perimeter').innerHTML = 'Perimeter is: ' + perimeter + ' cm'
}
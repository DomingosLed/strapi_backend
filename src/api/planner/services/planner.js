'use strict';

/**
 * planner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::planner.planner');

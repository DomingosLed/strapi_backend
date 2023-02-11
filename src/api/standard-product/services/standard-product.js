'use strict';

/**
 * standard-product service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::standard-product.standard-product');

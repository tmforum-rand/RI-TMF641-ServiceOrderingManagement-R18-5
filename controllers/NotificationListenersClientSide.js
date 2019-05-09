'use strict';

var url = require('url');

var NotificationListenersClientSide = require('../service/NotificationListenersClientSideService');

module.exports.listenToServiceOrderAttributeValueChangeNotification = function listenToServiceOrderAttributeValueChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderAttributeValueChangeNotification(req, res, next);
};

module.exports.listenToServiceOrderCreateNotification = function listenToServiceOrderCreateNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderCreateNotification(req, res, next);
};

module.exports.listenToServiceOrderDeleteNotification = function listenToServiceOrderDeleteNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderDeleteNotification(req, res, next);
};

module.exports.listenToServiceOrderStateChangeNotification = function listenToServiceOrderStateChangeNotification (req, res, next) {
  NotificationListenersClientSide.listenToServiceOrderStateChangeNotification(req, res, next);
};

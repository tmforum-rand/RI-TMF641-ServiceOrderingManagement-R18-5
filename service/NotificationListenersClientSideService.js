'use strict';

//Minimal Service with filtering (equality match only) and attribute selection
//Error Handing Need to define a global error hqndler
//Paging and Range based Iterator to be added
//Notification to be added add listener and implement hub

const util = require('util');
const uuid = require('uuid');

const mongoUtils = require('../utils/mongoUtils');
const swaggerUtils = require('../utils/swaggerUtils');
const notificationUtils = require('../utils/notificationUtils');

const {sendDoc} = require('../utils/mongoUtils');

const {setBaseProperties, traverse, 
       addHref, processCommonAttributes } = require('../utils/operationsUtils');

const {validateRequest} = require('../utils/ruleUtils');

const {processAssignmentRules} = require('../utils/operations');

const {getPayloadType, getPayloadSchema, getResponseType} = require('../utils/swaggerUtils');

const {updateQueryServiceType, updatePayloadServiceType, cleanPayloadServiceType} = require('../utils/swaggerUtils');

const {TError, TErrorEnum, sendError} = require('../utils/errorUtils');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.listenToServiceOrderAttributeValueChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceOrderAttributeValueChangeNotification
   * Example of a client listener for receiving the notification ServiceOrderAttributeValueChangeNotification
   *
   * data ServiceOrderAttributeValueChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceOrderAttributeValueChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceOrderAttributeValueChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceOrderAttributeValueChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceOrderAttributeValueChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceOrderAttributeValueChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceOrderAttributeValueChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceOrderCreateNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceOrderCreateNotification
   * Example of a client listener for receiving the notification ServiceOrderCreateNotification
   *
   * data ServiceOrderCreateNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceOrderCreateNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceOrderCreateNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceOrderCreateNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceOrderCreateNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceOrderCreateNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceOrderCreateNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceOrderDeleteNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceOrderDeleteNotification
   * Example of a client listener for receiving the notification ServiceOrderDeleteNotification
   *
   * data ServiceOrderDeleteNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceOrderDeleteNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceOrderDeleteNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceOrderDeleteNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceOrderDeleteNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceOrderDeleteNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceOrderDeleteNotification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.listenToServiceOrderStateChangeNotification = function(req, res, next) {
  /**
   * Client listener for entity ServiceOrderStateChangeNotification
   * Example of a client listener for receiving the notification ServiceOrderStateChangeNotification
   *
   * data ServiceOrderStateChangeNotification The event data
   * returns EventSubscription
   **/

  console.log('listenToServiceOrderStateChangeNotification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument notificationListenersClientSide */
  
  const resourceType = getResponseType(req);
  const requestSchema = getPayloadSchema(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest(req, 'listenToServiceOrderStateChangeNotification', payload))
    .then(payload => traverse(req, requestSchema, payload,[],getPayloadType(req)))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('listenToServiceOrderStateChangeNotification', payload))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      payload = swaggerUtils.updatePayloadServiceType(payload, req,'');

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {

            payload = cleanPayloadServiceType(payload);

            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => {
            console.log("listenToServiceOrderStateChangeNotification: error=" + error);
            sendError(res, internalError);
          })
      })
      .catch((error) => {
        console.log("listenToServiceOrderStateChangeNotification: error=" + error);
        sendError(res, internalError);
      })
    })
    .catch( error => {
      console.log("listenToServiceOrderStateChangeNotification: error=" + error.toString());
      sendError(res, error);
    });



};




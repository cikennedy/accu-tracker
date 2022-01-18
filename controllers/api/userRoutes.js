const router = require('express').Router();
const { User, Patient, Update } = require('../../models');
const withAuth = require('../../utils/auth');
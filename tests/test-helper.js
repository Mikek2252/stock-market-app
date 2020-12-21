import Application from 'stock-trader-app/app';
import config from 'stock-trader-app/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

import Controller from '@ember/controller';
import { service } from '@ember/service';

export default class TestingController extends Controller {
  @service firebase;
}

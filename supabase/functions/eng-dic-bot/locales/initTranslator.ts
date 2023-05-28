import { initTranslation, load } from '../deps.ts';
import { enTranslation } from './en.ts';
import { ruTranslation } from './ru.ts';

load('en', enTranslation);
load('ru', ruTranslation);
const translator = initTranslation<
	typeof enTranslation & typeof ruTranslation
>();

export default translator;

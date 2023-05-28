import supabase from '../../../db.ts';

const loadCommandsByLang = async (lang: string) => {
	const commands = (await supabase.from('command').select('*')).data ?? [];
	return commands.map(({ command, descriptionEN, descriptionRU }) => ({
		command: command,
		description: lang === 'en' ? descriptionEN : descriptionRU,
	}));
};

export default loadCommandsByLang;

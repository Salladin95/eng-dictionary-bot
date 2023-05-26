import supabase from "../../db.ts";

export const loadCommandsByLangTag = async (tag: string) => {
	const commads = await supabase.from('command').select('command, description').eq(
		'tag',
		tag,
	);
	return commads.data;
};
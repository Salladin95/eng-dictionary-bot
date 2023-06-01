export const getErrMsg = (err: unknown) => {
	if (err instanceof Error) {
		return err.message;
	}
	return JSON.stringify(err);
};

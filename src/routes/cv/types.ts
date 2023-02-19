export default interface WorkExperience {
	title: string;
	start: number;
	end?: number;
	company: string;
	url?: string;
	description: string;
	technology: string[];
}

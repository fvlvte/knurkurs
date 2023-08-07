export class Config
{
    public static async getAPIUrl() {
        return process.env.REACT_APP_API_URL || "http://localhost:80";
    }
}
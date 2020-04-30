namespace DatingApp.API.Helpers
{
    public static class Extentions
    {

        public static void AddApplicationError(this Microsoft.AspNetCore.Http.HttpResponse response, string message)
        {
            response.Headers.Add("Application-Error", message);
            response.Headers.Add("Access-Control-Expose_Headers", "Application-Error");
            response.Headers.Add("Access-Control-Allow-Origin", "*");

        }

    }
}
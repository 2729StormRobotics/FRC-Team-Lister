package stormroboticsteam.teamnumberfinderapp;

import android.content.pm.ActivityInfo;
import android.os.AsyncTask;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import java.io.BufferedInputStream;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;



public class MainActivity extends AppCompatActivity {

    public final static String apiURL = "www.thebluealliance.com/api/v2/teams/";
    public final static String header = "?frc2729:num-find-app:v01";
    public static Integer pageNum = 0;
    public final static Integer pages = 13;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
        String urlString = apiURL + pageNum + header;
        new CallAPI().execute(urlString);
    }

   /*
   public void onClick(View v){

    }
    */

    public void changeBlank(View view) {
        for (int i=0; i<=pages;){
            ((TextView) findViewById(R.id.blank)).setText(apiURL+ pageNum + header );
             pageNum += 1;
            i += 1;
        }
    }
}


    class CallAPI extends AsyncTask<String, String, String> {

        @Override
        protected String doInBackground(String... params) {

            String urlString = params[0]; // URL to call

            String resultToDisplay = "";

            InputStream in = null;

            // HTTP Get
            try {

                URL url = new URL(urlString);

                HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

                in = new BufferedInputStream(urlConnection.getInputStream());

            } catch (Exception e) {

                Log.d("EXCEPTION", e.getMessage());

                return e.getMessage();

            }

            return resultToDisplay;
        }
    }
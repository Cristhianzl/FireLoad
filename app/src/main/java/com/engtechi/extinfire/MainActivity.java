package com.engtechi.extinfire;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        Button botaoIniciar = (Button)findViewById(R.id.buttonIniciar);

        botaoIniciar.setOnClickListener(new View.OnClickListener() {
            public void onClick(View v){
                Intent intent = new Intent();

                intent.setClass(MainActivity.this, CalculadoraActivity.class);

                startActivity(intent);

                finish();
            }
        });
    }

}

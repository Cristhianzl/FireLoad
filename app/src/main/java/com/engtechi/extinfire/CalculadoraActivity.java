package com.engtechi.extinfire;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;

public class CalculadoraActivity extends AppCompatActivity {


    EditText editAcrilico;
    EditText editAcetona;
    EditText editAlgodao;
    EditText editBenzeno;
    EditText editBorrachaEspuma;
    EditText editBorrachaTiras;
    EditText editCelulose;
    EditText editCHexano;
    EditText editCouro;
    EditText editDglucose;
    EditText editEpoxi;
    EditText editEtano;
    EditText editEtanol;
    EditText editEteno;
    EditText editEtino;
    EditText editFibraSintetica;


    EditText editGraos;
    EditText editGraxaLub;
    EditText editLa;
    EditText editLixodeCozinha;
    EditText editMadeira;
    EditText editMetano;
    EditText editMetanol;
    EditText editMonoxidodeC;
    EditText editNButano;
    EditText editNOctano;
    EditText editNPentano;


    TextView editResultado;
    TextView editRisco;

    EditText editArea;
    Button btOK;

    TextView editCapextintoraA;
    TextView editCapextintoraB;
    TextView editCapextintoraC;
    TextView editCapextintoraD;
    TextView editCapextintoraK;
    TextView editDistanciamaxA;
    TextView editDistanciamaxB;

    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_calculadora);



        editAcetona = (EditText) findViewById(R.id.textAcetona);
        editAcrilico = (EditText) findViewById(R.id.textAcrilico);
        editAlgodao = (EditText) findViewById(R.id.textAlgodao);
        editBenzeno = (EditText) findViewById(R.id.textBenzeno);
        editBorrachaEspuma = (EditText) findViewById(R.id.textBorrachaEspuma);
        editBorrachaTiras = (EditText) findViewById(R.id.textBorrachaTiras);

         editCelulose = (EditText)findViewById(R.id.textCelulose);
         editCHexano = (EditText)findViewById(R.id.textC_Hexano);
         editCouro = (EditText)findViewById(R.id.textCouro);
        editDglucose = (EditText)findViewById(R.id.textD_Glucose);
        editEpoxi = (EditText)findViewById(R.id.textEpoxi);
         editEtano = (EditText)findViewById(R.id.textEtano);
         editEtanol = (EditText) findViewById(R.id.textEtanol);
         editEteno = (EditText)findViewById(R.id.textEteno);
         editEtino = (EditText)findViewById(R.id.textEtino);
         editFibraSintetica = (EditText)findViewById(R.id.textFibraSintetica);

        editGraos = (EditText)findViewById(R.id.textGraos);
        editGraxaLub = (EditText)findViewById(R.id.textGraxaLub);
        editLa = (EditText)findViewById(R.id.textLa);
        editLixodeCozinha = (EditText)findViewById(R.id.textLixodeCozinha);
        editMadeira = (EditText)findViewById(R.id.textMadeira);
        editMetano = (EditText)findViewById(R.id.textMetano);
        editMetanol = (EditText)findViewById(R.id.textMetanol);
        editMonoxidodeC = (EditText)findViewById(R.id.textMonoxidodecarbono);
        editNButano = (EditText)findViewById(R.id.textNButano);
        editNOctano = (EditText)findViewById(R.id.textNOctano);
        editNPentano = (EditText)findViewById(R.id.textNPentano);






        editResultado = (TextView) findViewById(R.id.textResultado);

        editArea = (EditText) findViewById(R.id.textArea);
        editRisco = (TextView) findViewById(R.id.textRisco);

        editCapextintoraA = (TextView) findViewById(R.id.textCapextintoraA);
        editCapextintoraB = (TextView) findViewById(R.id.textCapextintoraB);
        editCapextintoraC = (TextView) findViewById(R.id.textCapextintoraC);
        editCapextintoraD = (TextView) findViewById(R.id.textCapextintoraD);
        editCapextintoraK = (TextView) findViewById(R.id.textCapextintoraK);
        editDistanciamaxA = (TextView) findViewById(R.id.textDistanciamaxA);
        editDistanciamaxB = (TextView) findViewById(R.id.textDistanciamaxB);

        btOK = (Button) findViewById(R.id.buttonCalcular);


        btOK.setOnClickListener(new View.OnClickListener() {
            private int contentView;

            public void onClick(View view) {
                Double acetona;
                Double acrilico;
                Double algodao;
                Double benzeno;
                Double borrachaespuma;
                Double borrachatiras;
                Double celulose;
                Double chexano;
                Double couro;
                Double dglucose;
                Double epoxi;
                Double etano;
                Double etanol;
                Double eteno;
                Double etino;
                Double fibras;

                Double graos;
                Double graxalub;
                Double la;
                Double lixodecozinha;
                Double madeira;
                Double metano;
                Double metanol;
                Double monoxidodecarbono;
                Double nbutano;
                Double noctano;
                Double npentano;



                Double resultado;

                Double area;


                area = Double.parseDouble(editArea.getText().toString().trim());

                if (editAcetona.getText().toString().isEmpty()) {
                    acetona = 0.00;
                } else {
                    acetona = Double.parseDouble(editAcetona.getText().toString().trim());
                    acetona = acetona * 30;
                }

                if (editAcrilico.getText().toString().isEmpty()) {
                    acrilico = 0.00;
                } else {
                    acrilico = Double.parseDouble(editAcrilico.getText().toString().trim());
                    acrilico = acrilico * 28;
                }

                if (editAlgodao.getText().toString().isEmpty()) {
                    algodao = 0.00;
                } else {
                    algodao = Double.parseDouble(editAlgodao.getText().toString().trim());
                    algodao = algodao * 18;
                }

                if (editBenzeno.getText().toString().isEmpty()) {
                    benzeno = 0.00;
                } else {
                    benzeno = Double.parseDouble(editAcrilico.getText().toString().trim());
                    benzeno = benzeno * 40;
                }

                if (editBorrachaEspuma.getText().toString().isEmpty()) {
                    borrachaespuma = 0.00;
                } else {
                    borrachaespuma = Double.parseDouble(editBorrachaEspuma.getText().toString().trim());
                    borrachaespuma = borrachaespuma * 37;
                }

                if (editBorrachaTiras.getText().toString().isEmpty()) {
                    borrachatiras = 0.00;
                } else {
                    borrachatiras = Double.parseDouble(editBorrachaTiras.getText().toString().trim());
                    borrachatiras = borrachatiras * 32;
                }
                if (editCelulose.getText().toString().isEmpty()) {
                     celulose = 0.00;
                } else {
                    celulose = Double.parseDouble(editCelulose.getText().toString().trim());
                    celulose = celulose * 16;
                }
                if (editCHexano.getText().toString().isEmpty()) {
                    chexano = 0.00;
                } else {
                    chexano = Double.parseDouble(editCHexano.getText().toString().trim());
                    chexano = chexano * 43;
                }
                if (editCouro.getText().toString().isEmpty()) {
                    couro = 0.00;
                } else {
                    couro = Double.parseDouble(editCouro.getText().toString().trim());
                    couro = couro * 19;
                }
                if (editDglucose.getText().toString().isEmpty()) {
                    dglucose = 0.00;
                } else {
                    dglucose = Double.parseDouble(editDglucose.getText().toString().trim());
                    dglucose = dglucose * 15;
                }
                if (editEpoxi.getText().toString().isEmpty()) {
                    epoxi = 0.00;
                } else {
                    epoxi = Double.parseDouble(editEpoxi.getText().toString().trim());
                    epoxi = epoxi * 34;
                }
                if (editEtano.getText().toString().isEmpty()) {
                    etano = 0.00;
                } else {
                    etano = Double.parseDouble(editEtano.getText().toString().trim());
                    etano = etano * 47;
                }
                if (editEtanol.getText().toString().isEmpty()) {
                    etanol = 0.00;
                } else {
                    etanol = Double.parseDouble(editEtanol.getText().toString().trim());
                    etanol = etanol * 26;
                }
                if (editEteno.getText().toString().isEmpty()) {
                    eteno = 0.00;
                } else {
                    eteno = Double.parseDouble(editEteno.getText().toString().trim());
                    eteno = eteno * 50;
                }
                if (editEtino.getText().toString().isEmpty()) {
                    etino = 0.00;
                } else {
                    etino = Double.parseDouble(editEtino.getText().toString().trim());
                    etino = etino * 48;
                }

                if (editFibraSintetica.getText().toString().isEmpty()) {
                    fibras = 0.00;
                } else {
                    fibras = Double.parseDouble(editFibraSintetica.getText().toString().trim());
                    fibras = fibras * 29;
                }

                if (editGraos.getText().toString().isEmpty()) {
                    graos = 0.00;
                } else {
                    graos = Double.parseDouble(editGraos.getText().toString().trim());
                    graos = graos * 17;
                }



                if (editGraxaLub.getText().toString().isEmpty()) {
                    graxalub = 0.00;
                } else {
                    graxalub = Double.parseDouble(editGraxaLub.getText().toString().trim());
                    graxalub = graxalub * 41;
                }


                if (editLa.getText().toString().isEmpty()) {
                    la = 0.00;
                } else {
                    la = Double.parseDouble(editLa.getText().toString().trim());
                    la = la * 23;
                }


                if (editLixodeCozinha.getText().toString().isEmpty()) {
                    lixodecozinha = 0.00;
                } else {
                    lixodecozinha = Double.parseDouble(editLixodeCozinha.getText().toString().trim());
                    lixodecozinha = lixodecozinha * 18;
                }


                if (editMadeira.getText().toString().isEmpty()) {
                    madeira = 0.00;
                } else {
                    madeira = Double.parseDouble(editMadeira.getText().toString().trim());
                    madeira = madeira * 19;
                }



                if (editMetano.getText().toString().isEmpty()) {
                    metano = 0.00;
                } else {
                    metano = Double.parseDouble(editMetano.getText().toString().trim());
                    metano = metano * 50;
                }



                if (editMetanol.getText().toString().isEmpty()) {
                    metanol = 0.00;
                } else {
                    metanol = Double.parseDouble(editMetanol.getText().toString().trim());
                    metanol = metanol * 19;
                }



                if (editMonoxidodeC.getText().toString().isEmpty()) {
                    monoxidodecarbono = 0.00;
                } else {
                    monoxidodecarbono = Double.parseDouble(editMonoxidodeC.getText().toString().trim());
                    monoxidodecarbono = monoxidodecarbono * 10;
                }



                if (editNButano.getText().toString().isEmpty()) {
                    nbutano = 0.00;
                } else {
                    nbutano = Double.parseDouble(editNButano.getText().toString().trim());
                    nbutano = nbutano * 45;
                }



                if (editNOctano.getText().toString().isEmpty()) {
                    noctano = 0.00;
                } else {
                    noctano = Double.parseDouble(editNOctano.getText().toString().trim());
                    noctano = noctano * 44;
                }



                if (editNPentano.getText().toString().isEmpty()) {
                    npentano = 0.00;
                } else {
                    npentano = Double.parseDouble(editNPentano.getText().toString().trim());
                    npentano = npentano * 45;
                }






                resultado = ((acetona+acrilico+algodao+benzeno+borrachaespuma+borrachatiras+celulose+chexano+couro+dglucose+epoxi+etano+etanol+eteno+etino+fibras+graos+graxalub+la+lixodecozinha+madeira+metano+metanol+monoxidodecarbono+nbutano+npentano+noctano) / area);
                editResultado.setText("Carga de incêndio: " + String.format(resultado.toString(), 0.00) + " MJ/kg");


                if (resultado <= 300) {
                    editRisco.setText("Risco Baixo");
                    editCapextintoraA.setText("Capacidade extintora: 2-A");
                    editDistanciamaxA.setText("Distancia maxima a ser percorrida: 20m");
                    editCapextintoraB.setText("Capacidade extintora: 20-B");
                    editDistanciamaxB.setText("Distancia maxima a ser percorrida: 15m");
                    editCapextintoraC.setText("Distancia maxima a ser percorrida para o extintor tipo C: 20m");
                    editCapextintoraD.setText("Distancia maxima a ser percorrida para o extintor tipo D: 20m");
                    editCapextintoraK.setText("Distancia maxima a ser percorrida para o extintor tipo K: 15m");

                } else if (resultado > 300 && resultado <= 1200) {
                    editRisco.setText("Risco Medio");
                    editCapextintoraA.setText("Capacidade extintora: 3-A");
                    editDistanciamaxA.setText("Distancia maxima a ser percorrida: 20m");
                    editCapextintoraB.setText("Capacidade extintora: 40-B");
                    editDistanciamaxB.setText("Distancia maxima a ser percorrida: 15m");
                    editCapextintoraC.setText("Distancia maxima a ser percorrida tipo C: 20m");
                    editCapextintoraD.setText("Distancia maxima a ser percorrida tipo D: 20m");
                    editCapextintoraK.setText("Distancia maxima a ser percorrida tipo K: 15m");

                } else {
                    editRisco.setText("Risco Alto");
                    editCapextintoraA.setText("Capacidade extintora: 3-A e 4-A");
                    editDistanciamaxA.setText("Distancia maxima a ser percorrida: 15m à 20m");
                    editCapextintoraB.setText("Capacidade extintora: 40-B e 80-B");
                    editDistanciamaxB.setText("Distancia maxima a ser percorrida: 10m à 15m");
                    editCapextintoraC.setText("Distancia maxima a ser percorrida tipo C: 20m");
                    editCapextintoraD.setText("Distancia maxima a ser percorrida tipo D: 20m");
                    editCapextintoraK.setText("Distancia maxima a ser percorrida tipo K: 15m");
                }

            }

        });
    }
}

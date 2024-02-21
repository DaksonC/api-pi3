-- CreateTable
CREATE TABLE "DadosTemperaturaUmidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "temperatura" REAL NOT NULL,
    "umidade" REAL NOT NULL,
    "horario" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

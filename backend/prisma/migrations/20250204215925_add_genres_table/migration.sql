-- CreateTable
CREATE TABLE "genres" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "genres_name_key" ON "genres"("name");

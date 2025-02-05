-- CreateTable
CREATE TABLE "tv_shows" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "img_url" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "rating" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "_TvShowGenres" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_TvShowGenres_A_fkey" FOREIGN KEY ("A") REFERENCES "genres" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TvShowGenres_B_fkey" FOREIGN KEY ("B") REFERENCES "tv_shows" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_TvShowGenres_AB_unique" ON "_TvShowGenres"("A", "B");

-- CreateIndex
CREATE INDEX "_TvShowGenres_B_index" ON "_TvShowGenres"("B");

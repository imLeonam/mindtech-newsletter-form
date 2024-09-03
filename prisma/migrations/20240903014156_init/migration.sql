-- CreateTable
CREATE TABLE "NewsletterSubscriptions" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscriptions_id_key" ON "NewsletterSubscriptions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "NewsletterSubscriptions_email_key" ON "NewsletterSubscriptions"("email");

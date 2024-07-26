<template>
  <div class="w-full">
    <main class="max-w-screen-sm m-auto">
      <section>
        <div class="flex flex-col items-center">
          <v-img
            cover
            src="https://placehold.co/600x600/000000/FFFFFF.png"
            class="rounded-md w-16"
          />
          <h1 class="text-xl">Central Pharmacy</h1>
          <h2><span class="text-green-500">Open</span> 334 Central Ave, Brooklyn</h2>
          <div>
            <v-btn density="comfortable" color="blue" icon="mdi-phone"></v-btn>
            <v-btn density="comfortable" color="blue" icon="mdi-information-symbol"></v-btn>
          </div>
        </div>
        <hr />
        <v-text-field
          prepend-inner-icon="mdi-magnify"
          hide-details
          label="Search..."
        ></v-text-field>
        <div class="flex justify-between w-full overflow-x-scroll">
          <v-btn>All</v-btn>
          <v-btn>Men's</v-btn>
          <v-btn>Woman's</v-btn>
          <v-btn>Kids</v-btn>
          <v-btn>Seniors</v-btn>
        </div>
      </section>
      <section class="bg-blue-50">
        <v-icon color="blue" icon="mdi-creation" />
        <span>Suggested</span>
        <div class="flex w-full overflow-x-scroll my-2 py-2">
          <v-card min-width="300" class="mr-4">
            <template v-slot:title>Flu Vaccination</template>
            <template v-slot:text><v-icon icon="mdi-clock" />30 minutes</template>
          </v-card>
          <v-card min-width="300" class="mr-4">
            <template v-slot:title>Hepatitis Shot</template>
            <template v-slot:text><v-icon icon="mdi-clock" />30 minutes</template>
          </v-card>
          <v-card min-width="300">
            <template v-slot:title>Tetanus Shot</template>
            <template v-slot:text><v-icon icon="mdi-clock" />30 minutes</template>
          </v-card>
        </div>
      </section>
      <section>
        <v-icon color="blue" icon="mdi-fire" />
        <span>Popular Services</span>
        <div class="flex w-full">
          <v-card min-width="200">
            <v-img height="200" cover src="https://placehold.co/600x600/000000/FFFFFF.png" />
            <v-card-text
              ><h1>Immunizations</h1>
              <h2 class="text-sm text-gray-500">7 products</h2></v-card-text
            >
          </v-card>
          <v-card min-width="200">
            <v-img height="200" cover src="https://placehold.co/600x600/000000/FFFFFF.png" />
            <v-card-text
              ><h1>Counseling</h1>
              <h2 class="text-sm text-gray-500">5 products</h2></v-card-text
            >
          </v-card>
        </div>
      </section>
      <section>
        <v-icon color="blue" icon="mdi-view-grid" />
        <span>Services Category</span>
        <div class="flex w-full">
          <v-card min-width="200">
            <v-img height="200" cover src="https://placehold.co/600x600/000000/FFFFFF.png" />
            <v-card-text
              ><h1>Smoking Cessation</h1>
              <h2 class="text-sm text-gray-500">1 product</h2></v-card-text
            >
          </v-card>
          <v-card min-width="200">
            <v-img height="200" cover src="https://placehold.co/600x600/000000/FFFFFF.png" />
            <v-card-text
              ><h1>Mental Health</h1>
              <h2 class="text-sm text-gray-500">2 products</h2></v-card-text
            >
          </v-card>
        </div>
      </section>
    </main>
  </div>
</template>

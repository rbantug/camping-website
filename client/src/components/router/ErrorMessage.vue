<script setup lang="ts"></script>

<template>
  <div class="bg-neutral-300 dark:bg-neutral-700">
    <div class="w-[90%] pt-20 mx-auto flex justify-center items-center">
      <div class="h-150 flex justify-center items-center gap-x-10">
        <div class="flex flex-col items-center">
          <h1 class="h-40 flex items-center font-bold text-[10rem] dark:text-neutral-200">4</h1>
          <h1 class="h-40 flex items-center font-bold text-[10rem] dark:text-neutral-500">0</h1>
          <h1 class="h-40 flex items-center font-bold text-[10rem] dark:text-neutral-200">4</h1>
        </div>
        <div class="h-150 flex flex-col justify-center md:">
          <div class="flex flex-col md:flex-row md: gap-x-15 md:mb-8">
            <div class="text-accent-primary dark:text-accent-outline md:scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32">
                <g fill="currentColor">
                  <path
                    d="M15 15.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.043 3.5h2.086a.5.5 0 0 1 .353.854l-1.042 1.042a.5.5 0 0 1-.708 0l-1.042-1.042a.5.5 0 0 1 .353-.854M16 22a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0v-1a2 2 0 0 0-2-2m4.5-3a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"
                  />
                  <path
                    d="M24.806 4.725C26.288 3.234 29 4.178 29 6.43v13.098A6 6 0 0 1 31 24v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6c0-1.777.773-3.374 2-4.472V6.43c0-2.26 2.723-3.185 4.203-1.711L11.57 9h8.988zm1.922 1.31a.45.45 0 0 0-.503.1L21.39 11H10.753l-4.96-4.863a.47.47 0 0 0-.517-.1A.4.4 0 0 0 5 6.43v.363l3.146 3.146a1.5 1.5 0 0 1 0 2.122L5 15.207v4.209A5 5 0 0 1 12 24v5h8v-5a5 5 0 0 1 7-4.584v-4.209l-3.146-3.146a1.5 1.5 0 0 1 0-2.122L27 6.793V6.43a.4.4 0 0 0-.272-.394M27 8.208l-2.44 2.44a.5.5 0 0 0 0 .707L27 13.793zM5 13.793l2.44-2.44a.5.5 0 0 0 0-.707L5 8.208zM11 24c0-1.48-.804-2.773-2-3.465V22.5a.5.5 0 0 1-1 0v-2.374a4 4 0 0 0-2 0V22.5a.5.5 0 0 1-1 0v-1.965A4 4 0 0 0 3 24v5h8zm18 0c0-1.48-.804-2.773-2-3.465V22.5a.5.5 0 0 1-1 0v-2.374a4 4 0 0 0-2 0V22.5a.5.5 0 0 1-1 0v-1.965A4 4 0 0 0 21 24v5h8z"
                  />
                </g>
              </svg>
            </div>
            <div class="text-accent-primary/50 dark:text-amber-200 md:scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32">
                <g fill="currentColor">
                  <path
                    d="M15 15.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.043 3.5h2.086a.5.5 0 0 1 .353.854l-1.042 1.042a.5.5 0 0 1-.708 0l-1.042-1.042a.5.5 0 0 1 .353-.854M16 22a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0v-1a2 2 0 0 0-2-2m4.5-3a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"
                  />
                  <path
                    d="M24.806 4.725C26.288 3.234 29 4.178 29 6.43v13.098A6 6 0 0 1 31 24v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6c0-1.777.773-3.374 2-4.472V6.43c0-2.26 2.723-3.185 4.203-1.711L11.57 9h8.988zm1.922 1.31a.45.45 0 0 0-.503.1L21.39 11H10.753l-4.96-4.863a.47.47 0 0 0-.517-.1A.4.4 0 0 0 5 6.43v.363l3.146 3.146a1.5 1.5 0 0 1 0 2.122L5 15.207v4.209A5 5 0 0 1 12 24v5h8v-5a5 5 0 0 1 7-4.584v-4.209l-3.146-3.146a1.5 1.5 0 0 1 0-2.122L27 6.793V6.43a.4.4 0 0 0-.272-.394M27 8.208l-2.44 2.44a.5.5 0 0 0 0 .707L27 13.793zM5 13.793l2.44-2.44a.5.5 0 0 0 0-.707L5 8.208zM11 24c0-1.48-.804-2.773-2-3.465V22.5a.5.5 0 0 1-1 0v-2.374a4 4 0 0 0-2 0V22.5a.5.5 0 0 1-1 0v-1.965A4 4 0 0 0 3 24v5h8zm18 0c0-1.48-.804-2.773-2-3.465V22.5a.5.5 0 0 1-1 0v-2.374a4 4 0 0 0-2 0V22.5a.5.5 0 0 1-1 0v-1.965A4 4 0 0 0 21 24v5h8z"
                  />
                </g>
              </svg>
            </div>
            <div class="text-accent-primary/25 dark:text-accent-outline md:scale-150">
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 32 32">
                <g fill="currentColor">
                  <path
                    d="M15 15.5a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0m-.043 3.5h2.086a.5.5 0 0 1 .353.854l-1.042 1.042a.5.5 0 0 1-.708 0l-1.042-1.042a.5.5 0 0 1 .353-.854M16 22a2 2 0 0 0-2 2v1a2 2 0 1 0 4 0v-1a2 2 0 0 0-2-2m4.5-3a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"
                  />
                  <path
                    d="M24.806 4.725C26.288 3.234 29 4.178 29 6.43v13.098A6 6 0 0 1 31 24v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-6c0-1.777.773-3.374 2-4.472V6.43c0-2.26 2.723-3.185 4.203-1.711L11.57 9h8.988zm1.922 1.31a.45.45 0 0 0-.503.1L21.39 11H10.753l-4.96-4.863a.47.47 0 0 0-.517-.1A.4.4 0 0 0 5 6.43v.363l3.146 3.146a1.5 1.5 0 0 1 0 2.122L5 15.207v4.209A5 5 0 0 1 12 24v5h8v-5a5 5 0 0 1 7-4.584v-4.209l-3.146-3.146a1.5 1.5 0 0 1 0-2.122L27 6.793V6.43a.4.4 0 0 0-.272-.394M27 8.208l-2.44 2.44a.5.5 0 0 0 0 .707L27 13.793zM5 13.793l2.44-2.44a.5.5 0 0 0 0-.707L5 8.208zM11 24c0-1.48-.804-2.773-2-3.465V22.5a.5.5 0 0 1-1 0v-2.374a4 4 0 0 0-2 0V22.5a.5.5 0 0 1-1 0v-1.965A4 4 0 0 0 3 24v5h8zm18 0c0-1.48-.804-2.773-2-3.465V22.5a.5.5 0 0 1-1 0v-2.374a4 4 0 0 0-2 0V22.5a.5.5 0 0 1-1 0v-1.965A4 4 0 0 0 21 24v5h8z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div class="border-t-5 my-5 dark:text-neutral-500" />
            <div class="mb-2 text-neutral-700 text-3xl dark:text-neutral-400 md:mb-0">You aren't supposed to be here</div>
            <div class="text-neutral-700 text-3xl dark:text-neutral-400">Go back 
            <router-link to="home" class="text-accent-primary dark:text-accent-outline">home</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

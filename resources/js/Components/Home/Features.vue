<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:text-center">
          <!-- <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2> -->
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The sports industry is a massive moneymaker around the world.</p>
          <p class="mt-6 text-lg leading-8 text-gray-600">Revenue from sports is growing, and shows no signs of slowing down anytime soon.</p>
        </div>
        <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div v-for="feature in features" :key="feature.name" class="relative pl-16">
              <dt class="text-base font-semibold leading-7 text-gray-900">
                <div class="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <component :is="feature.icon" class="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                {{ feature.name }}
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">{{ feature.description }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/vue/24/outline'
  
  const features = [
    {
      name: 'Push to limit',
      description:
        'The mental discipline, the endurance, the balance and flexibility, and the strength gained from karate training have incredible carryover to performance in other sports. Endurance is important when practicing karate.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'Endurance',
      description:
        'Endurance is improved with warm-ups and through technique drills. Punching and kicking increases heart rate and over time, improves overall endurance.',
      icon: LockClosedIcon,
    },
    {
      name: 'Discipline',
      description:
        'Karate teaches mental discipline. Students are discouraged from picking fights, abusing drugs, and bullying others. Students are taught to be humble, to live a healthy lifestyle, and to work hard. Martial arts emphasizes the values of good character and good work ethic.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Skills',
      description:
        'Many of the techniques in martial arts require great balance and flexibility. Both of these skills are emphasized in schools with drills, and static and dynamic stretching.',
      icon: FingerPrintIcon,
    },
  ]
  </script>
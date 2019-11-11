<template>
    <div class="flex items-center rounded-lg bg-white shadow-lg overflow-hidden">
        <div class="h-32 w-32 flex-shrink-0">
            <img class="object-fill" :src="model.thumbnailUrl" :alt="model.thumbnailAlt">
        </div>
        <div class="px-6 py-4">
            <h3 class="text-lg font-semibold text-gray-800">{{ model.name }}</h3>
            <p class="text-gray-600">Starting at ${{ model.monthlyPrice }}/mo</p>
            <div class="mt-4">
                <a href="#" class="text-teal-500 hover:text-teal-500 font-semibold text-sm">Explore more options</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['model'],
}
</script>
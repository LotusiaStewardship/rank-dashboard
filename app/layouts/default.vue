<script setup lang="ts">
const route = useRoute()
const appConfig = useAppConfig()
const { isHelpSlideoverOpen } = useDashboard()

const links = [{
  id: 'home',
  label: ' Daily Rankings',
  icon: 'i-heroicons-arrow-trending-up',
  to: '/',
  tooltip: {
    text: 'Lowest Daily Rankings',
    shortcuts: ['G', 'H']
  }
},  {
  id: 'users',
  label: 'Ranked Users',
  icon: 'i-heroicons-user-group',
  to: '/ranked',
  tooltip: {
    text: 'Users',
    shortcuts: ['G', 'U']
  }
}
]

const groups = [{
  key: 'links',
  label: 'Go to',
  commands: links.map(link => ({ ...link, shortcuts: link.tooltip?.shortcuts }))
}, {
  key: 'code',
  label: 'Code',
  commands: [{
    id: 'source',
    label: 'View page source',
    icon: 'i-simple-icons-github',
    click: () => {
      window.open(`https://github.com/nuxt-ui-pro/dashboard/blob/v1/pages${route.path === '/' ? '/index' : route.path}.vue`, '_blank')
    }
  }]
}]

</script>

<template>
  <UDashboardLayout>
    <UDashboardPanel
      :width="250"
      :resizable="{ min: 200, max: 300 }"
      collapsible
    >
      <UDashboardNavbar
        class="!border-transparent"
        :ui="{ left: 'flex-1' }"
      >
        <template #left>
          <TeamsDropdown />
        </template>
      </UDashboardNavbar>

      <UDashboardSidebar>

        <UDashboardSidebarLinks :links="links" />

        <UDivider />

        <div class="flex-1" />


        <UDivider class="sticky bottom-0" />

        <template #footer>
          <!-- ~/components/UserDropdown.vue -->
          <UserDropdown />
        </template>
      </UDashboardSidebar>
    </UDashboardPanel>

    <slot />

    <!-- ~/components/HelpSlideover.vue -->
    <HelpSlideover />
    <!-- ~/components/NotificationsSlideover.vue -->
    <NotificationsSlideover />
  </UDashboardLayout>
</template>

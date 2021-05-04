<script lang="ts">
    export let activity;
    import platform from '../node_modules/platform/platform.js';
    import {formatDate} from "./utilities/date";
    $: activityDescription = `${activity.type} using ${activity.method} ${activity.deviceName ? 'on ' + activity.deviceName : '' }`;
</script>
<div class="bg-secondary p-3 mb-3 rounded">
    <h5 class="font-weight-bold">{activityDescription}</h5>
    <strong>Time:</strong> {formatDate(activity.date, 'HH:mm:ss')} <strong>Device:</strong> {platform.parse(activity.userAgent)} <strong>Location:</strong> {activity.location} {#if activity.ip}<strong>IP-address:</strong> {activity.ip}{/if}
</div>

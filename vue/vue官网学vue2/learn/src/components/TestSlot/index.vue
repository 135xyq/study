<template>
	<div class="test-slot-container">
        <div class="header">
            <p>头部</p>
            <slot name="header">头部插槽默认值</slot>
        </div>
        <div>
            <p>主区域</p>
            <slot name="main"></slot>
        </div>
        <div>
            <p>底部</p>
            <slot name="foot"></slot>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>
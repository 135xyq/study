<template>
    <div>
        <p>标题：{{article.title}}</p>
        <p>内容：{{article.content}}</p>
    </div>
</template>

<script>
export default {
    props:['article'],
    name:"Article"
};
</script>

<style>
</style>
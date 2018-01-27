---
title: Things to do
todos:
- First todo
- Another todo item
- A third todo item
---
{% extends 'layouts/main.swig' %}

{% block title %}
{{ title }}
{% endblock %}

{% block head %}
{% parent %}
<link rel="stylesheet" href="custom.css">
{% endblock %}

{% block content %}
      <h1>{{ title }}</h1>
          <ul>
          {% for todo in todos %}
                <li>{{ todo }}</li>
          {% endfor %}
          </ul>
{% endblock %}


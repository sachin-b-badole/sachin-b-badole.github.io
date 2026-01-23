---
permalink: /research/
title: "Research"
layout: archive
author_profile: false
classes: research-page
---
## Publications

{% assign pubs = site.publications | where: "type", "publication" | sort: "year" | reverse %}
{% for p in pubs %}
**{{ p.title }}**  
{{ p.authors | join: ", " }}  
{% if p.journal %}_{{ p.journal }}_ ({{ p.year }}); ({{ p.volume }}){% endif %}

<details class="paper-details">
  <summary>
    <span class="toggle-label">
      <span class="show">Show abstract</span>
      <span class="hide">Hide abstract</span>
    </span>
    <span class="links">
      {% if p.pdf %}
        | <a href="{{ p.pdf }}" target="_blank">Published Version</a>
      {% endif %}
      {% if p.website %}
        | <a href="{{ p.website }}" target="_blank">Journal Page</a>
      {% endif %}
    </span>
  </summary>

  <div class="abstract-text">
    {{ p.abstract }}
  </div>
</details>
<br>
{% endfor %}
---

## Working Papers

{% assign wps = site.publications | where: "type", "working paper" | sort: "order" %}
{% for p in wps %}
**{{ p.title }}**
{{ p.authors | join: ", " }}  
{% if p.journal %}_{{ p.journal }}_{% endif %}

<details class="paper-details">
  <summary>
    <span class="toggle-label">
      <span class="show">Show abstract</span>
      <span class="hide">Hide abstract</span>
    </span>
    <span class="links">
      {% if p.pdf %}
        | <a href="{{ p.pdf }}" target="_blank">Published Version</a>
      {% endif %}
      {% if p.website %}
        | <a href="{{ p.website }}" target="_blank">Journal Page</a>
      {% endif %}
      {% if p.preprint %}
        | <a href="{{ p.preprint }}" target="_blank">Preprint Version</a>
      {% endif %}
    </span>
  </summary>

  <div class="abstract-text">
    {{ p.abstract }}
  </div>
</details>
<br>
{% endfor %}
---

## Work in Progress

{% assign wips = site.publications | where: "type", "work in progress" | sort: "order" | reverse %}
{% for p in wips %}
**{{ p.title }}**  
{{ p.authors | join: ", " }}

{% if p.pdf %}[Draft]({{ p.pdf }}){% endif %}
{% if p.website %} | [Project Page]({{ p.website }}){% endif %}

<br><br>
{% endfor %}



<div>{% if section.settings.footer_payment_enable %}
          {% unless shop.enabled_payment_types == empty %}
            <div class="footer__item footer__item--payment" style="border-top: 1px solid #766456;">
              <p>Secure Payments:  </p>
              {% for type in shop.enabled_payment_types %}
                <span class="footer__icon footer__icon--payment">
                  {{ type | payment_type_svg_tag }}
                  <span class="visually-hidden">{{ type | capitalize | replace: '_', ' ' }}</span>
                </span>
              {% endfor %}
            </div>
          {% endunless %}
        {% endif %}
        </div>

import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MarkdownMeta: IPublicTypeComponentMetadata = {
  "componentName": "YuntiReactMarkdownLowcodeMaterials",
  "title": "Markdown",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@yunti/react-markdown-lowcode-materials",
    "version": "0.1.0",
    "exportName": "default",
    "main": "src/index.tsx",
    "destructuring": false,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        name: 'children',
        title: {
          label: '内容',
          tip: 'children | 内容'
        },
        setter: ['StringSetter']
      },
      {
        name: 'className',
        title: {
          label: '类名',
          tip: 'className | 类名'
        },
        setter: ['StringSetter']
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "plugins",
            "zh-CN": "**deprecat"
          },
          "tip": "plugins | **deprecated**: use `remarkPlugins` instead"
        },
        "name": "plugins",
        "description": "**deprecated**: use `remarkPlugins` instead",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "plugins",
                                "zh-CN": "plugins"
                              }
                            },
                            "name": "plugins",
                            "setter": {
                              "componentName": "ArraySetter",
                              "props": {
                                "itemSetter": {
                                  "componentName": "MixedSetter",
                                  "props": {
                                    "setters": [
                                      {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              "isRequired": false,
                                              "props": {}
                                            }
                                          }
                                        },
                                        "isRequired": false,
                                        "initialValue": {}
                                      },
                                      {
                                        "componentName": "MixedSetter",
                                        "props": {}
                                      },
                                      {
                                        "componentName": "FunctionSetter",
                                        "isRequired": false
                                      }
                                    ]
                                  }
                                }
                              },
                              "initialValue": []
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "settings",
                                "zh-CN": "settings"
                              }
                            },
                            "name": "settings",
                            "setter": {
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "extraSetter": {
                                    "componentName": "ObjectSetter",
                                    "props": {
                                      "config": {
                                        "extraSetter": {
                                          "componentName": "MixedSetter",
                                          "isRequired": false,
                                          "props": {}
                                        }
                                      }
                                    },
                                    "isRequired": false,
                                    "initialValue": {}
                                  }
                                }
                              },
                              "initialValue": {}
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          "isRequired": false,
                          "props": {}
                        }
                      }
                    }
                  },
                  {
                    "componentName": "MixedSetter",
                    "props": {}
                  },
                  {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                ]
              }
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "remarkPlugins",
            "zh-CN": "remarkPlugins"
          }
        },
        "name": "remarkPlugins",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "plugins",
                                "zh-CN": "plugins"
                              }
                            },
                            "name": "plugins",
                            "setter": {
                              "componentName": "ArraySetter",
                              "props": {
                                "itemSetter": {
                                  "componentName": "MixedSetter",
                                  "props": {
                                    "setters": [
                                      {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              "isRequired": false,
                                              "props": {}
                                            }
                                          }
                                        },
                                        "isRequired": false,
                                        "initialValue": {}
                                      },
                                      {
                                        "componentName": "MixedSetter",
                                        "props": {}
                                      },
                                      {
                                        "componentName": "FunctionSetter",
                                        "isRequired": false
                                      }
                                    ]
                                  }
                                }
                              },
                              "initialValue": []
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "settings",
                                "zh-CN": "settings"
                              }
                            },
                            "name": "settings",
                            "setter": {
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "extraSetter": {
                                    "componentName": "ObjectSetter",
                                    "props": {
                                      "config": {
                                        "extraSetter": {
                                          "componentName": "MixedSetter",
                                          "isRequired": false,
                                          "props": {}
                                        }
                                      }
                                    },
                                    "isRequired": false,
                                    "initialValue": {}
                                  }
                                }
                              },
                              "initialValue": {}
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          "isRequired": false,
                          "props": {}
                        }
                      }
                    }
                  },
                  {
                    "componentName": "MixedSetter",
                    "props": {}
                  },
                  {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                ]
              }
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rehypePlugins",
            "zh-CN": "rehypePlugins"
          }
        },
        "name": "rehypePlugins",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "MixedSetter",
              "props": {
                "setters": [
                  {
                    "componentName": "ObjectSetter",
                    "props": {
                      "config": {
                        "items": [
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "plugins",
                                "zh-CN": "plugins"
                              }
                            },
                            "name": "plugins",
                            "setter": {
                              "componentName": "ArraySetter",
                              "props": {
                                "itemSetter": {
                                  "componentName": "MixedSetter",
                                  "props": {
                                    "setters": [
                                      {
                                        "componentName": "ObjectSetter",
                                        "props": {
                                          "config": {
                                            "extraSetter": {
                                              "componentName": "MixedSetter",
                                              "isRequired": false,
                                              "props": {}
                                            }
                                          }
                                        },
                                        "isRequired": false,
                                        "initialValue": {}
                                      },
                                      {
                                        "componentName": "MixedSetter",
                                        "props": {}
                                      },
                                      {
                                        "componentName": "FunctionSetter",
                                        "isRequired": false
                                      }
                                    ]
                                  }
                                }
                              },
                              "initialValue": []
                            }
                          },
                          {
                            "title": {
                              "label": {
                                "type": "i18n",
                                "en-US": "settings",
                                "zh-CN": "settings"
                              }
                            },
                            "name": "settings",
                            "setter": {
                              "componentName": "ObjectSetter",
                              "props": {
                                "config": {
                                  "extraSetter": {
                                    "componentName": "ObjectSetter",
                                    "props": {
                                      "config": {
                                        "extraSetter": {
                                          "componentName": "MixedSetter",
                                          "isRequired": false,
                                          "props": {}
                                        }
                                      }
                                    },
                                    "isRequired": false,
                                    "initialValue": {}
                                  }
                                }
                              },
                              "initialValue": {}
                            }
                          }
                        ],
                        "extraSetter": {
                          "componentName": "MixedSetter",
                          "isRequired": false,
                          "props": {}
                        }
                      }
                    }
                  },
                  {
                    "componentName": "MixedSetter",
                    "props": {}
                  },
                  {
                    "componentName": "FunctionSetter",
                    "isRequired": false
                  }
                ]
              }
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "allowedElements",
            "zh-CN": "allowedElements"
          }
        },
        "name": "allowedElements",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "StringSetter",
              "isRequired": false,
            }
          },
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "disallowedElements",
            "zh-CN": "disallowedElements"
          }
        },
        "name": "disallowedElements",
        "setter": {
          "componentName": "ArraySetter",
          "props": {
            "itemSetter": {
              "componentName": "StringSetter",
              "isRequired": false,
              "initialValue": ""
            }
          },
          "initialValue": []
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "allowElement",
            "zh-CN": "allowElement"
          }
        },
        "name": "allowElement",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "unwrapDisallowed",
            "zh-CN": "unwrapDisallowed"
          }
        },
        "name": "unwrapDisallowed",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "sourcePos",
            "zh-CN": "sourcePos"
          }
        },
        "name": "sourcePos",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "rawSourcePos",
            "zh-CN": "rawSourcePos"
          }
        },
        "name": "rawSourcePos",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "skipHtml",
            "zh-CN": "skipHtml"
          }
        },
        "name": "skipHtml",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "includeElementIndex",
            "zh-CN": "includeElementIndex"
          }
        },
        "name": "includeElementIndex",
        "setter": {
          "componentName": "BoolSetter",
          "isRequired": false,
          "initialValue": false
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "transformLinkUri",
            "zh-CN": "transformLinkUri"
          }
        },
        "name": "transformLinkUri",
        "setter": {
          "componentName": "MixedSetter",
          "props": {
            "setters": [
              {
                "componentName": "FunctionSetter"
              },
              {
                "componentName": "RadioGroupSetter",
                "props": {
                  "dataSource": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ],
                  "options": [
                    {
                      "label": "false",
                      "value": false
                    }
                  ]
                },
                "initialValue": false
              }
            ]
          }
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "transformImageUri",
            "zh-CN": "transformImageUri"
          }
        },
        "name": "transformImageUri",
        "setter": {
          "componentName": "FunctionSetter"
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "linkTarget",
            "zh-CN": "linkTarget"
          }
        },
        "name": "linkTarget",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "components",
            "zh-CN": "components"
          }
        },
        "name": "components",
        "setter": {
          "componentName": "ObjectSetter",
          "props": {
            "config": {
              "extraSetter": {
                "componentName": "MixedSetter",
                "isRequired": false,
                "props": {}
              }
            }
          },
          "isRequired": false,
          "initialValue": {}
        }
      }
    ],
    "supports": {
      events: [
        {
          name: 'allowElement',
          template:
            "allowElement(element,index, parent, ${extParams}){ \n// Filter elements\n console.log('allowElement', element,index, parent); return true}"
        },
        {
          name: 'urlTransform',
          template:
            "urlTransform(url,key, node, ${extParams}){ \n// Change URLs (default: `defaultUrlTransform`)\n console.log('urlTransform', url,key, node); return }"
        }
      ],
      loop: true,
      condition: true,
      style: true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "Markdown",
    "screenshot": "",
    "schema": {
      "componentName": "YuntiReactMarkdownLowcodeMaterials",
      "props": {
        __component_name: 'YuntiReactMarkdownLowcodeMaterials',
        children: '#### 标题'
      }
    }
  }
];

export default {
  ...MarkdownMeta,
  snippets
};
